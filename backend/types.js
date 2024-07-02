const zod = requre("zod");

const createTodo =zod.object({
title : zod.string(),
description : zod.string()
})
const updateTODO = zod.object({
    id: zod.strning()

});

module.exports= {
    createTodo: createTodo,
    updateTODO: updateTODO
}