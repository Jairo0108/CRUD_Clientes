import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto, updateClienteDto } from './dto/cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Get()
  getAllClientes() {
    return this.clientesService.getAllClientes();
  }

  @Post()
  createCliente(@Body() nuevoCliente: CreateClienteDto) {
   return this.clientesService.createClientes(nuevoCliente.nombre, nuevoCliente.rut);
  }

  @Delete(":id")
  deleteCliente(@Param(":id") id: string){
    this.clientesService.deleteClientes(id);
  }

  @Patch(":id")
  updateCliente(@Param("id") id: string, @Body() updatedFields: updateClienteDto){
   return this.clientesService.updateClientes(id, updatedFields);
  }
}
