import { promises as fs } from 'fs';
let cidades = [];
let estados = [];

const gerarEstadosJson = async () => {
  cidades = JSON.parse(await fs.readFile('./Dados/Cidades.json'));
  estados = JSON.parse(await fs.readFile('./Dados/Estados.json'));

  for (const estado of estados) {
    const cidadesPorEstado = cidades.filter(
      (cidade) => cidade.Estado === estado.ID
    );

    await fs.writeFile(
      `./Saida/${estado.Sigla}.json`,
      JSON.stringify(cidadesPorEstado, null, 2)
    );
  }
  gerar();
};
const gerar = async () => {
  const countCidadesEstado = async (estado) => {
    const cidadesEstado = JSON.parse(
      await fs.readFile(`./Saida/${estado}.json`)
    );
    console.log(`${estado} tem ${cidadesEstado.length} cidades. \n`);
  };

  const getTotalCidadesPorEstado = () => {
    const arrEstados = [];
    for (const estado of estados) {
      const cidadesDoEstado = cidades.filter(
        (cidade) => cidade.Estado === estado.ID
      );
      arrEstados.push({
        UF: estado.Sigla,
        total: cidadesDoEstado.length,
      });
    }
    return arrEstados;
  };

  const top5MaisCidade = () => {
    const arrEstados = getTotalCidadesPorEstado();

    arrEstados.sort((a, b) => {
      return b.total - a.total;
    });

    const top5 = arrEstados.splice(0, 5);

    console.log(top5.map((item) => `${item.UF} - ${item.total}`));
  };

  const top5MenosCidade = () => {
    const arrEstados = getTotalCidadesPorEstado();

    arrEstados.sort((a, b) => {
      return a.total - b.total;
    });

    const top5 = arrEstados.splice(0, 5);

    top5.sort((a, b) => {
      return b.total - a.total;
    });

    console.log(top5.map((item) => `${item.UF} - ${item.total}`));
  };

  const cidadeComONomeMaisLongoPorEstado = async () => {
    const result = [];
    for (const estado of estados) {
      const cidadesEstado = JSON.parse(
        await fs.readFile(`./Saida/${estado.Sigla}.json`)
      );

      const maiorCidade = cidadesEstado
        .sort((a, b) => b.Nome.length - a.Nome.length)
        .filter(
          (cidade, _, array) => cidade.Nome.length === array[0].Nome.length
        )
        .sort();

      result.push(`${maiorCidade[0].Nome} - ${estado.Sigla}`);
    }

    console.log(result);
    return result;
  };

  const cidadeComONomeMaisCurtoPorEstado = async () => {
    const result = [];
    for (const estado of estados) {
      const cidadesEstado = JSON.parse(
        await fs.readFile(`./Saida/${estado.Sigla}.json`)
      );

      const menorCidade = cidadesEstado
        .sort((a, b) => a.Nome.length - b.Nome.length)
        .filter(
          (cidade, _, array) => cidade.Nome.length === array[0].Nome.length
        )
        .sort();

      result.push(`${menorCidade[0].Nome} - ${estado.Sigla}`);
    }

    console.log(result);
    return result;
  };

  const cidadeMaiorNome = (longestcidadesfromEachestado) => {
    const aMaiorCidade = longestcidadesfromEachestado.reduce((acc, next) => {
      return acc.length > next.length ? acc : next;
    }, '');

    console.log(aMaiorCidade);
  };

  const cidadeMenorNome = (cidadeComONomeMaisCurtoPorEstado) => {
    const aMenorCidade = cidadeComONomeMaisCurtoPorEstado
      .sort((a, b) => a.length - b.length)
      .filter((cidade, _, array) => cidade.length === array[0].length)
      .sort();

    console.log(aMenorCidade[0]);
  };

  countCidadesEstado('AC');
  top5MaisCidade();
  top5MenosCidade();
  const response = await cidadeComONomeMaisLongoPorEstado();
  const responsemenorCidade = await cidadeComONomeMaisCurtoPorEstado();
  cidadeMaiorNome(response);
  cidadeMenorNome(responsemenorCidade);
};
gerarEstadosJson();
