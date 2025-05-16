/**
 * @openapi
 * /obras:
 *   get:
 *       tags: [Obras]
 *       summary: Lista todas as obras
 *       responses:
 *           200:
 *               description: Lista de obras
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: array
 *                           items:
 *                               $ref: '#/components/schemas/Obra'
 *   post:
 *       tags: [Obras]
 *       summary: Cria uma nova obra
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/ObraInput'
 *       responses:
 *           201:
 *               description: Obra criada
 * /obras/{id}:
 *   get:
 *       tags: [Obras]
 *       summary: Busca uma obra por ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       responses:
 *           200:
 *               description: Obra encontrada
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Obra'
 *           404:
 *               description: Obra não encontrada
 *   patch:
 *       tags: [Obras]
 *       summary: Atualiza as informações de uma obra
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
 *                       $ref: '#/components/schemas/ObraInput'
 *       responses:
 *           200:
 *               description: Obra atualizada
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Obra'
 *           404:
 *               description: Obra não encontrada
 *   delete:
 *       tags: [Obras]
 *       summary: Exclui uma obra
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *               type: integer
 *       responses:
 *           200:
 *               description: Obra excluída
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Obra'
 *           404:
 *               description: Obra não encontrada
 * components:
 *   schemas:
 *       Obra:
 *           type: object
 *           properties:
 *               id:
 *                   type: integer
 *               idElemento:
 *                   type: integer
 *               pais:
 *                   type: string
 *               generos:
 *                   type: array
 *                   items:
 *                      type: string
 *               lancamento:
 *                   type: DateTime
 *               sinopse:
 *                   type: string
 *               idDiretor:
 *                   type: integer
 *               tipo:
 *                   type: ObraType
 *               duracao:
 *                   type: integer
 *               oscar:
 *                   type: boolean
 *               emProducao:
 *                   type: boolean
 *       ObraInput:
 *           type: object
 *           properties:
 *               id:
 *                   type: integer
 *               idElemento:
 *                   type: integer
 *               pais:
 *                   type: string
 *               generos:
 *                   type: array
 *                   items:
 *                      type: string
 *               lancamento:
 *                   type: DateTime
 *               sinopse:
 *                   type: string
 *               idDiretor:
 *                   type: integer
 *               tipo:
 *                   type: ObraType
 *               duracao:
 *                   type: integer
 *               oscar:
 *                   type: boolean
 *               emProducao:
 *                   type: boolean
 */
