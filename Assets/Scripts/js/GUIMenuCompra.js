#pragma strict

var _rectMenu: Rect;
var _rectBotoes: Rect;
var _indiceTexto: int;
var _torre1: GameObject;
var _torre2: GameObject;
var _auxTorre: GameObject;

function Start () 
{
	_indiceTexto = 0;
}

function Update () 
{
	if(Input.GetMouseButtonDown(1))
	{
		_indiceTexto = 1;
		_rectMenu.x = Input.mousePosition.x;
		_rectMenu.y = -(Input.mousePosition.y - Screen.height);
		_rectMenu.height = Screen.height/5;
		_rectMenu.width = Screen.width/10;
		
		
		if((_rectMenu.x + _rectMenu.width) > Screen.width)
		{
			_rectMenu.x -= (_rectMenu.x + _rectMenu.width - Screen.width);
		}
		
		if((_rectMenu.y + _rectMenu.height) > Screen.height)
		{
			_rectMenu.y -= (_rectMenu.y + _rectMenu.height - Screen.height);
		}
	}
}

function OnGUI()
{
	if(_indiceTexto == 1)
	{
		GUI.Window(0,_rectMenu, Torres, "Torres");
	}
}

function Torres()
{
	_rectBotoes.x = 10;
	_rectBotoes.y = 20;
	_rectBotoes.width = _rectMenu.width - 20;
	_rectBotoes.height = _rectMenu.height/2 - 12;
	
	if(GUI.Button(_rectBotoes, "Torre - 1"))
	{
		if(_auxTorre)
		{
			Destroy(_auxTorre);
		}
		_auxTorre = Instantiate(_torre1, transform.position, transform.rotation);
		_indiceTexto = 0;
	}
	_rectBotoes.y += _rectMenu.height/2 -12;
	
	if(GUI.Button(_rectBotoes, "Torre - 2"))
	{
		if(_auxTorre)
		{
			Destroy(_auxTorre);
		}
		_auxTorre = Instantiate(_torre2, transform.position, transform.rotation);
		_indiceTexto = 0;
	} 
}