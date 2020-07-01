export function formatarData(data) {
	let dia = new Date(data).getDate();
	let mes = new Date(data).getMonth() + 1;
	let ano = new Date(data).getFullYear();

	let dataFormatada = dia + '/' + mes + '/' + ano;
	
	return dataFormatada;
}