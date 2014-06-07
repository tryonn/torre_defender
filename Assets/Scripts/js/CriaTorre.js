#pragma strict
//tutorial criando jogo de torre defender

var _cameraP: Camera;
var _podeCriarTorre = false;
var _torreFinal: GameObject;

function Start ()
{
	_cameraP = Camera.main;
}

function Update ()
{
	var _raio: Ray = _cameraP.ScreenPointToRay(Input.mousePosition);
	var _colisor: RaycastHit;
	transform.renderer.material.color = Color.red;
	
	
	//sistema para utilizacao do mapeamento da posicao do gameobject da torre
	if(Physics.Raycast(_raio, _colisor, Mathf.Infinity))
	{
		_podeCriarTorre =  true;
		transform.position.x = _colisor.point.x;
		transform.position.z = _colisor.point.z;
		transform.position.y = 10 + transform.lossyScale.y/2; 
		
		var _qntChildTransform: int = transform.childCount;
		var i: int;
		for(i = 0;i < _qntChildTransform; i++)
		{
			var _childress: Transform = transform.GetChild(i);
			if(Physics.Raycast(_childress.position, -Vector3.up, _colisor, Mathf.Infinity))
			{
				if(_colisor.point.y < 9.8 || _colisor.point.y > 10.2)
				{
					_podeCriarTorre = false;
					break;
				}
			}
		}
		
		if(_podeCriarTorre)
		{
			transform.renderer.material.color = Color.blue;
			if(Input.GetMouseButtonDown(0))
			{
				Instantiate(_torreFinal, transform.position, transform.rotation);
			}
		}
	}

}