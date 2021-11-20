import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ConectCredit } from './conect-credit.entity';
import { ConectCreditService } from './conect-credit.service';
import { CreateConectCreditDto } from './dto/create.dto';
import { UpdateConectCreditDto } from './dto/update.dto';

@Controller('conect-credit')
export class ConectCreditController{
	
	constructor(private readonly conectCreditService: ConectCreditService) {}

  @Post('/create')
  create(@Body() createConectCreditDto: CreateConectCreditDto): Promise<ConectCredit> {
    return this.conectCreditService.create(createConectCreditDto);
  }

  @Get()
  findAll(): Promise<ConectCredit[]> {
    return this.conectCreditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ConectCredit> {
    return this.conectCreditService.findOne(id);
  }

  @Put('/edit/:id')
  async update(@Param('id') id: number, @Body() updateConexCreditoDto: UpdateConectCreditDto) {
    return await this.conectCreditService.update(id, updateConexCreditoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.conectCreditService.remove(id);
    return "Conect-Credit deletada!"
  }

}
