#pragma strict

var _caminho: Transform;
var _distancia: Vector3;
var _distanciaM: float;
var distInimigoCaminho: float;
var i: int;
var _rotacao: Quaternion;
var _ajuda_rotacao: float;
var _vida: int;
var _velocidade: int;

var _criaOrda: CriaOrda;


function Start ()
{
	i = 0;
	_vida = 30;
	_velocidade = 5;
	/*while(_caminho.childCount >0 )
	{
		_caminho.name = "CAM" + i;
		i++;
		_caminho = _caminho.GetChild(0);
	}*/
}

function Update ()
{
	if(_vida <= 0)
	{
		_criaOrda = GameObject.Find("InimigoSpawn").GetComponent("CriaOrda");
		_criaOrda._qntInimigosVivos--;
		Destroy(gameObject);
	}
	_distancia = transform.position - _caminho.position;
	_distanciaM = Vector3.Distance(transform.position, _caminho.position);
	
	if(_distanciaM < distInimigoCaminho)
	{
		if(_caminho.childCount >0 )
		{
			_caminho = _caminho.GetChild(0);
			_caminho.name = "CAM" + i;
		}
	} else 
	{
		_rotacao = Quaternion.LookRotation(_distancia);
		_ajuda_rotacao = transform.rotation.eulerAngles.y - _rotacao.eulerAngles.y - 180;
		
		if(_ajuda_rotacao < 0)
		{
			_ajuda_rotacao += 360; 
		}
		
		if(_ajuda_rotacao > 360)
		{
			_ajuda_rotacao -= 360; 
		}
		
		if(_ajuda_rotacao > 180 && _ajuda_rotacao < 350)
		{
			transform.rotation.eulerAngles.y += 90 * Time.deltaTime;
		}
		
		if(_ajuda_rotacao < 180 && _ajuda_rotacao > 10)
		{
			transform.rotation.eulerAngles.y -= 90 * Time.deltaTime;
		}
		
		if(_ajuda_rotacao <10 || _ajuda_rotacao > 350)
		{
			transform.rotation.eulerAngles.y = _rotacao.eulerAngles.y - 180;
			//adicionado aqui para melhor perfomance na rotacao
			transform.Translate(0,0,_velocidade * Time.deltaTime);
		}
		//transform.Translate(0,0,10 * Time.deltaTime);
	}
}