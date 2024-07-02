const zod = require("zod");

const createTodo =zod.object({
title : zod.string(),
description : zod.string()
})
const updateTODO = zod.object({
    id: zod.string()

});

module.exports= {
    createTodo: createTodo,
    updateTODO: updateTODO
}