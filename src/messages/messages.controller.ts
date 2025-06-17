import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

@Get()
listMessages() {
    return 'Hello World';
}
@Post()
createMessage(@Body() body: any) {
    console.log(body);
    return {
        message: 'Message created successfully',
        data: body
    }
}
@Get(':id')
getMessage(@Param('id') id: string) {
    console.log(id);
}
}
