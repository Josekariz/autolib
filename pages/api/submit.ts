// pages/api/submit.ts

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
    console.error("Error in /api/submit:", error);
    res.status(500).json({ message: 'Failed to submit review', error: error instanceof Error ? error.message : 'Unknown error' });
  }
}
