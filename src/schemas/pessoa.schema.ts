/**
 * @openapi
 * /pessoas:
 *   get:
 *       tags: [Pessoas]
 *       summary: Lista todas as pessoas
 *       responses:
 *           200:
 *               description: Lista de pessoas
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: array
 *                           items:
 *                               $ref: '#/components/schemas/Pessoa'
 *   post:
 *       tags: [Pessoas]
 *       summary: Cria uma nova pessoa
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/PessoaInput'
 *       responses:
 *           201:
 *               description: Pessoa criada
 * /pessoas/{id}:
 *   get:
 *       tags: [Pessoas]
 *       summary: Busca uma pessoa por ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       responses:
 *           200:
 *               description: Pessoa encontrada
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Pessoa'
 *           404:
 *               description: Pessoa não encontrada
 *   patch:
 *       tags: [Pessoas]
 *       summary: Atualiza as informações de uma pessoa
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
 *                       $ref: '#/components/schemas/PessoaInput'
 *       responses:
 *           200:
 *               description: Pessoa atualizada
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Pessoa'
 *           404:
 *               description: Pessoa não encontrada
 *   delete:
 *       tags: [Pessoas]
 *       summary: Exclui uma pessoa
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       responses:
 *           200:
 *               description: Pessoa excluída
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Pessoa'
 *           404:
 *               description: Pessoa não encontrada
 * components:
 *   schemas:
 *       Pessoa:
 *           type: object
 *           properties:
 *               id:
 *                   type: integer
 *               nome:
 *                   type: string
 *               nascimento:
 *                   type: DateTime
 *               pais:
 *                   type: string
 *               tipo:
 *                   type: PessoaType
 *               premiacoes:
 *                   type: array
 *                   items:
 *                      type: string
 *               biografia:
 *                   type: string
 *       PessoaInput:
 *           type: object
 *           properties:
 *               id:
 *                   type: integer
 *               nome:
 *                   type: string
 *               nascimento:
 *                   type: DateTime
 *               pais:
 *                   type: string
 *               tipo:
 *                   type: PessoaType
 *               premiacoes:
 *                   type: array
 *                   items:
 *                      type: string
 *               biografia:
 *                   type: string
 */
