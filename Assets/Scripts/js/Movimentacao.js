#pragma strict

var _velocidade: Vector3;

var _constanteZ: float;

var _constanteX: float;

function Start () {}

function Update () 
{
	if (Input.mousePosition.x <= 5 || Input.mousePosition.x >= Screen.width - 5)
	{
		if (Input.GetAxis("Mouse X")!= 0)
		{
			if (Input.GetAxis("Mouse X") > 0 && Input.mousePosition.x >= Screen.width -5 )
			{
				_constanteX=2;
			} else
			{
				if (Input.mousePosition.x <= 5)
				{
					_constanteX=-2;
				}
			}
			_velocidade.x = _constanteX * 30 * Time.deltaTime;
		}
	} else
	{
		_velocidade.x = 0;
	}
	
	if (Input.mousePosition.y <= 5 || Input.mousePosition.y >= Screen.height - 5)
	{
		if (Input.GetAxis("Mouse Y")!= 0)
		{
			if (Input.GetAxis("Mouse Y") > 0 && Input.mousePosition.y >= Screen.height - 5)
			{
				_constanteZ=2;
			} else
			{
				if (Input.mousePosition.y <= 5)
				{
					_constanteZ=-2;
				}
			}
		}
		_velocidade.z = _constanteZ * 30 * Time.deltaTime;
	} else
	{
		_velocidade.z=0;
	}
	_velocidade.y = -Input.GetAxis("Mouse ScrollWheel") * 200 * Time.deltaTime;
	transform.Translate(_velocidade);
}