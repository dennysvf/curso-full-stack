import { Router } from 'express';
import accountsController from '../controllers/accounts';
import { validateAccountSchema, validateAuthorization, validateLoginSchema, validateUpdateAccountSchema, validateAuthentication, validateAccountEmailSchema, validateAccountEmailUpdateSchema, validateMSAuthentication } from './middlewares';


const router = Router();

/**
 * GET /accounts/settings/accountEmails
 * Returns all accountEmails from the account settings
 */
router.get('/accounts/settings/accountEmails', validateAuthentication, accountsController.getAccountEmails);

/**
 * GET /accounts/settings/accountEmails/:accountEmailId
 * Returns one accountEmail from the account settings
 */
router.get('/accounts/settings/accountEmails/:accountEmailId', validateAuthentication, accountsController.getAccountEmail);

/**
 * GET /accounts/settings
 * Returns all settings from this account
 */
router.get('/accounts/settings', validateAuthentication, accountsController.getAccountSettings);

/**
 * GET /accounts/:accountId/accountEmails/:accountEmailId
 * Microservice calls to get an accountEmail from an account
 */
router.get('/accounts/:accountId/accountEmails/:accountEmailId', validateMSAuthentication, accountsController.getAccountEmail);

/**
 * GET /accounts/:id
 * Returns one account
 */
router.get('/accounts/:id', validateAuthentication, validateAuthorization, accountsController.getAccount);

/**
 * GET /accounts/
 * Returns all accounts
 */
router.get('/accounts/', validateAuthentication, accountsController.getAccounts);

/**
 * PATCH /accounts/:id
 * Update the account
 */
router.patch('/accounts/:id', validateAuthentication, validateAuthorization, validateUpdateAccountSchema, accountsController.setAccount);

/**
 * PATCH /accounts/settings/accountEmails/:id
 * Updates one accountEmail from the account
 */
router.patch('/accounts/settings/accountEmails/:id', validateAuthentication, validateAccountEmailUpdateSchema, accountsController.setAccountEmail);

/**
 * PUT /accounts/settings/accountEmails
 * Add one accountEmail to the account settings
 */
router.put('/accounts/settings/accountEmails', validateAuthentication, validateAccountEmailSchema, accountsController.addAccountEmail);

/**
 * POST /accounts/settings
 * Create the account settings or return if it already exists
 * ?force=true to be sure that will be reacreated
 */
router.post('/accounts/settings', validateAuthentication, accountsController.createAccountSettings);

/**
 * POST /accounts/
 * Open route to create a new account
 */
router.post('/accounts/', validateAccountSchema, accountsController.addAccount);

/**
 * POST /accounts/login
 * Do login
 */
router.post('/accounts/login', validateLoginSchema, accountsController.loginAccount);

/**
 * POST /accounts/logout
 * Do logout
 */
router.post('/accounts/logout', validateAuthentication, accountsController.logoutAccount);

/**
 * DELETE /accounts/:id
 * Soft-delete the account
 * ?force=true to really remove
 */
router.delete('/accounts/:id', validateAuthentication, validateAuthorization, accountsController.deleteAccount);

/**
 * DELETE /accounts/settings/accountEmails/:id
 * Remove the accountEmail from the account settings
 */
router.delete('/accounts/settings/accountEmails/:id', validateAuthentication, accountsController.deleteAccountEmail);

export default router;