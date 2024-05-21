const Inputs = {
  member: [
    {
      label: "Nome completo",
      id: "name",
      name: "name",
      placeholder: "Ex.: José da Silva",
    },
    {
      label: "Papel desempenhado",
      id: "role",
      name: "role",
      placeholder: "Ex.: cavaleiro mouro",
    },
    {
      label: "Data de entrada",
      id: "memberSince",
      name: "memberSince",
      placeholder: "Ex.: 20/08/2012",
    },
  ],
  memberCheckbox: [
    {
      label: "Adminstrador",
      id: "isAdm",
      name: "isAdm",
      placeholder: "",
    },
    {
      label: "Cavaleiro",
      id: "isMale",
      name: "isMale",
      placeholder: "",
    },
  ],
  post: [
    {
      type: "input",
      id: "title",
      name: "title",
      label: "Título",
      placeholder: "Escreva o título da postagem",
    },
    {
      type: "textarea",
      id: "content",
      name: "content",
      label: "Conteúdo",
      placeholder: "Escreva o corpo da postagem",
    },
  ],
  sponsor: [
    {
      label: "Nome completo",
      id: "name",
      name: "name",
      placeholder: "Ex.: Lojas Americanas",
    },
    {
      label: "Valor contribuído",
      id: "sponsorship",
      name: "sponsorship",
      placeholder: "Ex.: 3004,00",
    },
  ],
};

export const getInput = (input: string) => {
  return Inputs[input as keyof typeof Inputs];
};