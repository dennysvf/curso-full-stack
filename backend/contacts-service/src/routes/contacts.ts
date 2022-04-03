import { Router } from 'express';
import middlewareCommons from 'ms-commons/api/routes/middlewares';
import { validateContactSchema, validateUpdateContactSchema } from './middlewares';
import controller from '../controllers/contacts';

const router = Router();

/**
 * GET /contacts/:id/account/:accountId
 * Only microservices call this route
 * Returns one contact from the account
 */
router.get('/contacts/:id/account/:accountId', middlewareCommons.validateMicroserviceAuth, controller.getContact);

/**
 * GET /contacts/:id
 * Returns one contact from the account
 */
router.get('/contacts/:id', middlewareCommons.validateAccountAuth, controller.getContact);

/**
 * GET /contacts/
 * Returns all contacts from the account
 */
router.get('/contacts/', middlewareCommons.validateAccountAuth, controller.getContacts);

/**
 * POST /contacts/
 * Save a contact to an account
 */
router.post('/contacts/', middlewareCommons.validateAccountAuth, validateContactSchema, controller.addContact)

/**
 * PATCH /contacts/:id
 * Updates a contact from the account
 */
router.patch('/contacts/:id', middlewareCommons.validateAccountAuth, validateUpdateContactSchema, controller.setContact);

/**
 * DELETE /contacts/:id
 * Soft-delete one contact from the account
 * ?force=true to really remove
 */
router.delete('/contacts/:id', middlewareCommons.validateAccountAuth, controller.deleteContact);

export default router;