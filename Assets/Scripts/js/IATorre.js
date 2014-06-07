#pragma strict

var _alcance: int;
var _poder_ataque: int;
var _tempo_ataque: float;
var _tempo: float;

var _inimigos: GameObject[];
var _inimigo_na_mira: GameObject;
var _distancia: float;
var _mira: Transform;
var _auxInimigo: GameObject;
var _achouInimigo: boolean;
var _iaInimigo: IAInimigo;

function Start ()
{
	_alcance = 30;//alcance do tira e de 30 m
	_poder_ataque = 10;//tira 10 de vida do inimigo
	_tempo_ataque = 1;//ataca de 1 em 1 segundo
}

function Update ()
{
	_tempo += Time.deltaTime;
	_achouInimigo = false;
	_inimigo_na_mira = null;
	//acho o inimigo
	_inimigos = GameObject.FindGameObjectsWithTag("Inimigo1");
	
	for(_inimigo_na_mira in _inimigos)
	{
		//acho o inimigo
		_distancia = Vector3.Distance(_inimigo_na_mira.transform.position, transform.position);
		if(_distancia < _alcance)
		{
			_auxInimigo = _inimigo_na_mira;
			_achouInimigo = true;
			break;
		}
	}
	
	if(_achouInimigo)
	{
		_mira = transform.GetChild(0);
		var _rotacao: Quaternion;
		_rotacao = Quaternion.LookRotation(transform.position - _auxInimigo.transform.position);
		_mira.rotation.eulerAngles.y = _rotacao.eulerAngles.y;
		
		if(_tempo > _tempo_ataque)
		{
			_iaInimigo = _auxInimigo.GetComponent("IAInimigo");
			_iaInimigo._vida -= _poder_ataque;
			
			var canhao: Transform;
			canhao = _mira.GetChild(0);
			canhao.Rotate(0,0,360 * Time.deltaTime);
			_tempo = 0;
		}
	}
	
}