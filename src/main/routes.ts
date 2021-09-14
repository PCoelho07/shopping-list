import { Request, Response, Router } from "express"
import { ItemsController } from "@/presentation/items-controller"
import { AddList } from "@/data/usecases/add-list/add-list"
import { MongodbListRepository } from "@/infrastructure/repositories/mongodb-list-repository"
import { HttpResponse } from "@/presentation/contracts/http"

const routes = Router()

routes.get('/list/:id/items', async (req: Request, res: Response) => {
    const itemController = new ItemsController()
    const result = await itemController.list(req.params.id)

    res.status(result.code).json(result.data)
})

routes.post('/list/:id/items', async (req: Request, res: Response) => {
    const id = (req.params.id).trim()
    const params = req.body
    const itemController = new ItemsController()
    const result = await itemController.save(id, params)

    res.status(result.code).json(result.data)
})

routes.post('/items/:id/check', async (req: Request, res: Response) => {
    const id = (req.params.id).trim()
    const itemController = new ItemsController()
    const result = await itemController.check(id)

    res.status(result.code).json(result.data )
})

routes.get('/lists', (req: Request, res: Response) => {

})

routes.post('/lists', async (req: Request, res: Response) => {
    const params = req.body
    const listRepository = new MongodbListRepository()
    const addListUseCase = new AddList(listRepository)
    const result = await addListUseCase.add(params)

    const response: HttpResponse<Object> = {
        code: 200,
        data: {
            success: result,
        }
    }

    res.status(response.code).json(response.data)
})

export default routes