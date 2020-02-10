function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota= Math.floor(Math.random()*10 + 1);

	if (nota < 4)
	{ alert ("vamos, la proxima se puede" + nota);
}

	else if (nota >= 9 && nota <= 10)
	{
		alert ("Excelente" + nota);
	}

	else if (nota => 4)
	{
		alert ("Aprobado" + nota);
	}

}//FIN DE LA FUNCIÓN