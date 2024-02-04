import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const reviewData = req.body;
    const savedReview = await prisma.review.create({
      data: reviewData,
    });
    res.status(200).json(savedReview);
  } catch (error) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      res.status(500).json({ message: 'Failed to submit review', error: error.message });
    } else {
      // For unexpected errors, send a generic message
      res.status(500).json({ message: 'Failed to submit review', error: 'An unexpected error occurred' });
    }
  }
}
