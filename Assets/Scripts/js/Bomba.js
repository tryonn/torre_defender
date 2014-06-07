#pragma strict

var _inimigos: GameObject[];
var _poderBomba: int;
var _disMax: int;
var _alvo: Transform;
var _alvoDist: float;
var _distInimigo: float;
var _inimigo: GameObject;
var _velocidadeBomba: float;

var _iaInimigo: IAInimigo;

function Start () {

}

function Update () 
{
	_alvoDist = Vector3.Distance(_alvo.position, transform.position);
	if(_alvoDist<1)
	{
		_inimigos = GameObject.FindGameObjectsWithTag("Inimigo");
		for(_inimigo in _inimigos)
		{
			_distInimigo = Vector3.Distance(_inimigo.transform.position, _alvo.position);
			if(_distInimigo < _disMax)
			{
				_iaInimigo = _inimigo.GetComponent("IAInimigo");
				_iaInimigo._vida -= _poderBomba - Mathf.FloorToInt(_poderBomba * (_distInimigo / _disMax));
			}
		}
	} else {
		_iaInimigo = _inimigo.GetComponent("IAInimigo");
		_velocidadeBomba = 2 * _iaInimigo._velocidade; 
		transform.LookAt(_alvo);
		transform.Translate(0,0,_velocidadeBomba);
	}
}