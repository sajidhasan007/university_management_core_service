import { AcademicSemister, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDB = async (
  data: AcademicSemister
): Promise<AcademicSemister> => {
  const result = prisma.academicSemister.create({
    data,
  });

  return result;
};

export const AcademicSemisterSerivice = {
  insertIntoDB,
};
