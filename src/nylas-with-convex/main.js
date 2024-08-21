const HF_TOKEN = "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"

/* eslint-disable */
async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/WhereIsAI/UAE-Large-V1",
    {
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    }
  )
  const result = await response.json()
  return result
}

// query({ inputs: "Today is a sunny day and I will get some ice cream." }).then(
//   (response) => {
//     console.log(JSON.stringify(response))
//   }
// )

const arr = []
for (let i = 0; i < 50; i += 1) {
  arr[i] = i + 1
}

Promise.all(
  arr.map((number) => query({ inputs: `This is number ${number}` }))
).then((responses) => {
  const results = responses.map((response) => JSON.stringify(response))
  const clipped = results.slice(49)
  clipped.forEach((c) => console.log("\n\n\n\n", c))
})
