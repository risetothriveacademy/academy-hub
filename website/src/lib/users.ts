import fs from "fs/promises";
import path from "path";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  purchasedCourses?: string[];
};

export type PasswordResetToken = {
  email: string;
  token: string;
  expiresAt: string;
};

const USERS_FILE = path.join(process.cwd(), "data", "users.json");
const RESET_TOKENS_FILE = path.join(process.cwd(), "data", "reset-tokens.json");

// Initialize files if they don't exist
async function initializeFile(filePath: string, defaultData: any) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2));
  }
}

// User functions
export async function getUsers(): Promise<User[]> {
  await initializeFile(USERS_FILE, []);
  const data = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(data);
}

export async function saveUsers(users: User[]): Promise<void> {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export async function getUserById(id: string): Promise<User | null> {
  const users = await getUsers();
  return users.find((u) => u.id === id) || null;
}

export async function createUser(email: string, password: string, name: string): Promise<User> {
  const users = await getUsers();

  // Check if user already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: crypto.randomUUID(),
    email: email.toLowerCase(),
    name,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    purchasedCourses: [],
  };

  users.push(newUser);
  await saveUsers(users);

  return newUser;
}

export async function updateUserPassword(email: string, newPassword: string): Promise<void> {
  const users = await getUsers();
  const userIndex = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  users[userIndex].password = hashedPassword;

  await saveUsers(users);
}

// Password reset token functions
export async function getResetTokens(): Promise<PasswordResetToken[]> {
  await initializeFile(RESET_TOKENS_FILE, []);
  const data = await fs.readFile(RESET_TOKENS_FILE, "utf-8");
  return JSON.parse(data);
}

export async function saveResetTokens(tokens: PasswordResetToken[]): Promise<void> {
  await fs.writeFile(RESET_TOKENS_FILE, JSON.stringify(tokens, null, 2));
}

export async function createPasswordResetToken(email: string): Promise<string> {
  const tokens = await getResetTokens();

  // Remove any existing tokens for this email
  const filteredTokens = tokens.filter((t) => t.email.toLowerCase() !== email.toLowerCase());

  // Generate new token
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 3600000).toISOString(); // 1 hour

  const newToken: PasswordResetToken = {
    email: email.toLowerCase(),
    token,
    expiresAt,
  };

  filteredTokens.push(newToken);
  await saveResetTokens(filteredTokens);

  return token;
}

export async function verifyPasswordResetToken(token: string): Promise<string | null> {
  const tokens = await getResetTokens();
  const resetToken = tokens.find((t) => t.token === token);

  if (!resetToken) {
    return null;
  }

  // Check if token has expired
  if (new Date(resetToken.expiresAt) < new Date()) {
    return null;
  }

  return resetToken.email;
}

export async function deletePasswordResetToken(token: string): Promise<void> {
  const tokens = await getResetTokens();
  const filteredTokens = tokens.filter((t) => t.token !== token);
  await saveResetTokens(filteredTokens);
}
