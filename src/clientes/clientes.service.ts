import { Injectable } from '@nestjs/common';
import { Cliente } from './clientes.entity';
import { v4 } from 'uuid';
import { updateClienteDto } from './dto/cliente.dto';

@Injectable()
export class ClientesService {
  private clientes: Cliente[] = [
    {
      id: '1',
      nombre: 'juanito',
      rut: '12.345.678-9',
    },
  ];

  getAllClientes() {
    return this.clientes;
  }

  createClientes(nombre: string, rut: string) {
    const cliente = {
      id: v4(),
      nombre,
      rut,
    };
    this.clientes.push(cliente);
    return cliente;
  }

  deleteClientes(id: string) {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
  }

  getClienteById(id: string): Cliente {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  updateClientes(id: string, updatedFields: updateClienteDto) : Cliente{
    const cliente = this.getClienteById(id);
    const nuevoCliente = Object.assign(cliente, updatedFields);
    this.clientes.map((cliente) =>
      cliente.id === id ? nuevoCliente : Cliente
    ); 
    return nuevoCliente;
  }
}
