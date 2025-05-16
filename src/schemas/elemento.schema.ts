/**
 * @openapi
 * /elementos:
 *   get:
 *       tags: [Elementos]
 *       summary: Lista todas as elementos
 *       responses:
 *           200:
 *               description: Lista de elementos
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: array
 *                           items:
 *                               $ref: '#/components/schemas/Elemento'
 *   post:
 *       tags: [Elementos]
 *       summary: Cria um novo elemento
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/ElementoInput'
 *       responses:
 *           201:
 *               description: Elemento criado
 * /elementos/{id}:
 *   get:
 *       tags: [Elementos]
 *       summary: Busca um elemento por ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       responses:
 *           200:
 *               description: Elemento encontrado
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Elemento'
 *           404:
 *               description: Elemento não encontrado
 *   patch:
 *       tags: [Elementos]
 *       summary: Atualiza as informações de um elemento
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/ElementoInput'
 *       responses:
 *           200:
 *               description: Elemento atualizado
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Elemento'
 *           404:
 *               description: Elemento não encontrado
 *   delete:
 *       tags: [Elementos]
 *       summary: Exclui um elemento
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       responses:
 *           200:
 *               description: Elemento excluído
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Elemento'
 *           404:
 *               description: Elemento não encontrado
 * components:
 *   schemas:
 *       Elemento:
 *           type: object
 *           properties:
 *               id:
 *                   type: integer
 *               titulo:
 *                   type: string
 *               idDiretorioPai:
 *                   type: integer
 *       ElementoInput:
 *           type: object
 *           properties:
 *               id:
 *                   type: integer
 *               titulo:
 *                   type: string
 *               idDiretorioPai:
 *                   type: integer
 */
