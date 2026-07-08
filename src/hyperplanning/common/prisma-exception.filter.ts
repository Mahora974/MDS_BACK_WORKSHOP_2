import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../../generated/prisma/client';

/**
 * Traduit les erreurs Prisma courantes en réponses HTTP propres.
 *  - P2002 : contrainte d'unicité violée      -> 409 Conflict
 *  - P2025 : enregistrement introuvable        -> 404 Not Found
 *  - P2003 : contrainte de clé étrangère       -> 409 Conflict
 */
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    switch (exception.code) {
      case 'P2002': {
        const target = (exception.meta?.target as string[] | undefined)?.join(', ');
        throw new ConflictException(
          `Valeur déjà existante${target ? ` pour: ${target}` : ''}`,
        );
      }
      case 'P2025':
        throw new NotFoundException('Enregistrement introuvable');
      case 'P2003':
        throw new ConflictException(
          'Référence invalide (clé étrangère) ou enregistrement encore référencé',
        );
      default:
        throw exception;
    }
  }
}
