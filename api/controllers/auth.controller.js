import jwt from "jsonwebtoken";


export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d", // Token expires in 1 day
    });

    // Set the token as a secure, SameSite: None cookie
    res.cookie("token", token, {
      httpOnly: true,  // Prevent access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use Secure in production
      sameSite: "None", // Allow cross-site requests, must be Secure
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });

    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
