import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import errorMiddleware from "__server__/middleware/errorMiddleware";
import sendEmail from "__server__/utils/sendEmail";

// api route handler
const handler = nc({ onError: errorMiddleware });

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, description } = req.body;
    await sendEmail(name, email, description);

    return res
      .status(200)
      .json({ message: "Check your email for password reset" });
  } catch (error: any) {
    throw new Error(error.message);
  }
});

export default handler;
