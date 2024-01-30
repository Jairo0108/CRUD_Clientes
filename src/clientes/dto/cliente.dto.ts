import {IsString, IsNotEmpty, MaxLength, IsOptional} from "class-validator"

export class CreateClienteDto{
    @IsString()
    @IsNotEmpty()
    nombre: string

    @MaxLength(12)
    rut: string
}

export class updateClienteDto{

    @IsString()
    @IsOptional()
    nombre?: string

    @IsString()
    @IsOptional()
    @MaxLength(12)
    rut?: string
}