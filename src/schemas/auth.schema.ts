/**
 * @openapi
 * tags:
 *   - name: Autenticação
 *     description: Endpoints relacionados ao login e emissão de token
 * /auth/login:
 *   post:
 *       tags:
 *           - Autenticação
 *       security: []
 *       summary: Realiza login e gera um token JWT
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/LoginInput'
 *       responses:
 *           200:
 *               description: Login bem-sucedido, retorna o token JWT
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/LoginResponse'
 *           400:
 *               description: Dados inválidos (nome ou senha ausentes)
 *           401:
 *               description: Senha inválida
 *           404:
 *               description: Usuário não encontrado
 * components:
 *   schemas:
 *       LoginInput:
 *           type: object
 *           required:
 *               - email
 *               - senha
 *           properties:
 *               email:
 *                   type: string
 *                   example: usuario@unifei.edu.br
 *               senha:
 *                   type: string
 *                   example: senha321
 *       LoginResponse:
 *           type: object
 *           properties:
 *               message:
 *                   type: string
 *                   example: Login realizado com sucesso!
 *               token:
 *                   type: string
 *                   example: eyJhbGciOiJzI1NiIsInRCI6IkpX9...
 */
