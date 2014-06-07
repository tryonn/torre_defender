#pragma strict

var _inimigos: GameObject;
var _auxInimigo: GameObject;
var _alteraInimigo: IAInimigo;

var _ordaAtual: int;
var _qntInimigosOrda: int;
var _qntInimigosGerados: int;
var _qntInimigosVivos: int;

var _tempoRespaw: float;
var _novaOrda: boolean;

var _caminhoInimigoGerado: Transform;

var _mudaAtributosInimigoPorNumeroOrdaCriado: int;
var _novaVidaInimigo: int;
var _novaVelocidadeInimigo: int;

function Start () 
{
	_qntInimigosOrda = 10;
	_ordaAtual = 0;
	_tempoRespaw = 0;
	_qntInimigosVivos = _qntInimigosOrda;
	_qntInimigosGerados = 0;
	_novaOrda = true;
}

function Update () 
{
	if(_novaOrda)
	{
		_tempoRespaw += Time.deltaTime;
		if(_tempoRespaw > 1)
		{
			_tempoRespaw = 0;
			if(_qntInimigosOrda > _qntInimigosGerados)
			{
				_auxInimigo = Instantiate(_inimigos, transform.position, transform.rotation);
				_alteraInimigo = _auxInimigo.GetComponent("IAInimigo");
				_alteraInimigo._caminho = _caminhoInimigoGerado;
				_qntInimigosGerados++;
			} else {
				_novaOrda = false;
			}
		}
	} else {
		if(_qntInimigosVivos ==0)
		{
			_novaOrda = true;
			_mudaAtributosInimigoPorNumeroOrdaCriado++;
			
			if(_mudaAtributosInimigoPorNumeroOrdaCriado == 1)
			{
				_alteraInimigo._vida = _alteraInimigo._vida + 5;
				_novaVidaInimigo = _alteraInimigo._vida;
			}
			
			if(_mudaAtributosInimigoPorNumeroOrdaCriado == 2)
			{
				_alteraInimigo._vida = _alteraInimigo._vida - 5;
				if(_alteraInimigo._velocidade < 50)
				{
					_alteraInimigo._velocidade++;
				}
				
				_novaVelocidadeInimigo = _alteraInimigo._velocidade;
				_novaVidaInimigo = _alteraInimigo._vida;
			}
			
			if(_mudaAtributosInimigoPorNumeroOrdaCriado == 3)
			{
				_alteraInimigo._vida = _alteraInimigo._vida + 5;
				_alteraInimigo._velocidade = _alteraInimigo._velocidade + 15; 
				if(_qntInimigosOrda < 50)
				{
					_qntInimigosOrda += 3;
				}
				
				_mudaAtributosInimigoPorNumeroOrdaCriado = 0;
				
				_novaVelocidadeInimigo = _alteraInimigo._velocidade;
				_novaVidaInimigo = _alteraInimigo._vida;
			}
			
			_qntInimigosGerados = 0;
			_qntInimigosVivos = _qntInimigosOrda;
			_ordaAtual++;
		}
	}
}