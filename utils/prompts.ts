export const PROMPT = `
Description: how to make pinto beans, On the basis of description please give me response in json format that how do i complete the given task from step 1 to the end with title and description. The title should have what to do and the description should tell how to complete the task in the title. If the description is long, then make it in points. Start json with step. You can give as many title and description until the description is fulfilled.
Answer:
{
"step": [
{
"title": "Rinse and Sort Beans",
"description": "Rinse the pinto beans thoroughly in a colander under cold running water. Remove any debris or discolored beans."
},
{
"title": "Soak Beans",
"description": [
"Place the beans in a large pot or bowl.",
"Cover them with plenty of fresh water, at least 2 inches above the beans.",
"Soak the beans overnight or for at least 6 hours. This helps soften the beans and reduces cooking time."
]
}
]
}
`;
export const PROMPT2 = `, On the basis of description please give me response in json format that how do i complete the given task from step 1 to the end with title and description. The title should have what to do and the description should tell how to complete the task in the title. If the description is long, then make it in points. Start json with step. You can give as many title and description until the description is fulfilled.
Answer:?
`;
