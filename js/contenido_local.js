var est       = {};
est.prefijo   = "ginegi";
est.tit_gral  = [""];
est.tit_otros = [""];
est.paneles   = [""];
est.col_dim   = ["12"];

function contenido() {
  //estructuraB(est);
}

function documentos() {
  $("#idDocumentos").html(creaDocumentos());
}

function creaDocumentos() {
  
  var content;
  content =  '<div class="row sinMargenes">';
  content += '  <a href="#uno" class="linkMenu" data-toggle="collapse"><span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;Programa Anual de Adquisiciones, Arrendamientos y Servicios</a>';
  content += '  <div id="uno" class="collapse">';
  content += '    <div class="row sinMargenes">';
  content += '      <div class="col-xs-10 col-sm-10 col-md-10"><img src="img/punto.png" alt="">&nbsp;&nbsp;2022, autorizado</div>';
  content += '      <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.30 MB)</a></div>';
  content += '    </div>';
  content += '    <div class="row sinMargenes">';
  content += '      <div class="col-xs-10 col-sm-10 col-md-10"><img src="img/punto.png" alt="">&nbsp;&nbsp;2021, modificado al mes de diciembre</div>';
  content += '      <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.50 MB)</a></div>';
  content += '    </div>';
  content += '    <div class="row sinMargenes">';
  content += '      <div class="col-xs-10 col-sm-10 col-md-10"><img src="img/punto.png" alt="">&nbsp;&nbsp;2020, modificado al mes de diciembre</div>';
  content += '      <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.50 MB)</a></div>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';
  content += '<div class="row sinMargenes">';
  content += '  <a href="#dos" class="linkMenu" data-toggle="collapse"><span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;Programa Anual de Obra Pública</a>';
  content += '  <div id="dos" class="collapse">';
  content += '    <div class="row sinMargenes">';
  content += '      <div class="col-xs-10 col-sm-10 col-md-10"><img src="img/punto.png" alt="">&nbsp;&nbsp;2022, autorizado</div>';
  content += '      <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.30 MB)</a></div>';
  content += '    </div>';
  content += '    <div class="row sinMargenes">';
  content += '      <div class="col-xs-10 col-sm-10 col-md-10"><img src="img/punto.png" alt="">&nbsp;&nbsp;2021, modificado al mes de diciembre</div>';
  content += '      <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.50 MB)</a></div>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';
  content += '<div class="row sinMargenes">';
  content += '  <a href="#tres" class="linkMenu" data-toggle="collapse"><span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;Programa Anual de Enajenaciones</a>';
  content += '  <div id="tres" class="collapse">';
  content += '    <div class="row sinMargenes">';
  content += '      <div class="col-xs-10 col-sm-10 col-md-10"><img src="img/punto.png" alt="">&nbsp;&nbsp;2021, modificado al mes de diciembre</div>';
  content += '      <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.50 MB)</a></div>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';
  content += '<div class="row sinMargenes">';
  content += '  <div class="col-xs-10 col-sm-10 col-md-10 sinMargenes"><img src="img/punto.png" alt="">&nbsp;&nbsp;Calendario de sesiones ordinarias del Comité de Adquisiciones, Arrendamientos y Servicios</div>';
  content += '  <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.30 MB)</a></div>';
  content += '</div>';
  content += '<div class="row sinMargenes">';
  content += '  <div class="col-xs-10 col-sm-10 col-md-10 sinMargenes"><img src="img/punto.png" alt="">&nbsp;&nbsp;Calendario de sesiones ordinarias Comité de Obra Pública 2014</div>';
  content += '  <div class="col-xs-2  col-sm-2  col-md-2 sinMargenes"><a href="../documentos/uno.pdf" class="linkMenu" target="_blank"><img src="img/ico_pdf.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;(0.50 MB)</a></div>';
  content += '</div>';
  content += '<br /><br /><br /><br />';
  return content;
}

function herramientas() {
  $("#idHerramientas").html(creaHerramientas());
}

function creaHerramientas() {
  var content;
  content = '<div class="row">';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6">';
  content += '    <div class="col-xs-3"><img class="img-responsive center-block" src="img/registro.png"></div>';
  content += '    <div class="col-xs-9">';
  content += '      <p><a target="_blank" href="http://localhost:49739/proveedor/registro" tabindex="0" alt="Generar el pre registro del proveedore o contratista"><strong>1. Pre-registro de Proveedores y Contratistas</strong></a></p>';
  content += '      <p>Formar parte del Catálogo de Proveedores y Contratistas del Instituto, a fin de poder ser convocado a los procedimientos de adquisición de bienes, contratación de servicios, obra pública y servicios relacionados con éstas que implemente el Instituto.<br/><br/><a target="blank" href="http://localhost:49739/proveedor/into" tabindex="0" alt="Continuar el pre registro y anexar la documentación"><strong>2. Anexar documentos</strong></a></p>';
  content += '    </div>';
  content += '  </div>';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6">';
  content += '    <div class="row">';
  content += '      <div class="col-xs-3"><img class="img-responsive center-block" src="img/catalogo.png"></div>';
  content += '      <div class="col-xs-9">';
  content += '        <p><a target="_blank" href="http://localhost:49739/proveedor/catalogo" tabindex="0" alt="Consultar el catálogo de proveedores y contratistas"><strong>Catálogo de Proveedores y Contratistas</strong></a></p>';
  content += '        <p>Consulta la información del Catálogo de Proveedores y Contratistas del Instituto.</p>';
  content += '      </div>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="row">';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6">';
  content += '    <div class="col-xs-3"><img class="img-responsive center-block" src="img/adjudicacion.png"></div>';
  content += '    <div class="col-xs-9">';
  content += '      <p><a target="_blank" href="/MACI/login.aspx" tabindex="0" alt="Acceder a la captura de la cotización"><strong>Adjudicaciones directas</strong></a></p>';
  content += '      <p>Captura tu cotización y/o propuesta técnica económica y envíala al Instituto en forma electrónica.</p>';
  content += '    </div>';
  content += '  </div>';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6  ">';
  content += '    <div class="col-xs-3"><img class="img-responsive center-block" src="img/invitacion.png"></div>';
  content += '    <div class="col-xs-9">';
  content += '      <p><a target="_blank" href="/MACI/login.aspx" tabindex="0" alt="Acceder a la captura de la cotización"><strong>Invitación a cuando menos tres personas</strong></a></p>';
  content += '      <p>Captura tu cotización y/o propuesta técnica económica y envíala al Instituto en forma electrónica.</p>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="row">';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6  ">';
  content += '    <div class="col-xs-3"><img class="img-responsive center-block" src="img/investigacion.png"></div>';
  content += '    <div class="col-xs-9">';
  content += '      <p><a target="_blank" href="/investigaciones/publicas/default.html" tabindex="0" alt="Acceder a la captura de los estudios de mercado"><strong>Investigaciones de mercado</strong></a></p>';
  content += '      <p>Captura la información que solicita el INEGI en la Investigación de Mercado previa al inicio del procedimiento de adquisición de los bienes o contratación de los servicios requeridos.</p>';
  content += '    </div>';
  content += '  </div>';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6 ">';
  content += '    <div class="col-xs-3">&nbsp;</div>';
  content += '    <div class="col-xs-9">&nbsp;</div>';
  content += '  </div>';
  content += '</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';

  return content;
}


function recuperar() {
  $("#idRecuperar").html(creaRecuperarContrasenia());
}

function creaRecuperarContrasenia() {
  var content;
  content = '<div class="row">';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6">';
  content += '    <div class="col-xs-3"><img class="img-responsive center-block" src="img/contrasena.png" tabindex="-1" alt="Recuperar contraseña"></div>';
  content += '    <div class="col-xs-9">';
  content += '      <p><a href="http://localhost:49739/proveedor/contrasenia" aria-label="Vinculo si " target="_blank" tabindex="0"><strong>¿Forma parte del Catálogo de Proveedores y Contratistas y desea recuperar su contraseña?</strong></a></p>';
  content += '      <p class="linea_blanca">Guía&nbsp;&nbsp;&nbsp;<a href="../documentos/uno.pdf" target="_blank" tabindex="0" aria-label="Vinculo al "><img src="img/ico_pdf.png" alt="Documento PDF"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(437 KB)</p>';
  content += '    </div>';
  content += '  </div>';

  content += '  <div class="col-xs-12 col-sm-6 col-md-6">';
  content += '    <div class="row">';
  content += '      <div class="col-xs-3"><img class="img-responsive center-block" src="img/revisardatos.png" tabindex="-1" alt="Actualizar información"></div>';
  content += '      <div class="col-xs-9">';
  content += '        <p><a href="http://localhost:49739/proveedor/modificar" aria-label="Si desea consultar o modificar sus datos, Vinculo" target="_blank" tabindex="0"><strong>¿Desea consultar o modificar sus datos?</strong></a></p>';
  content += '        <p>Revise y actualice los datos y la información registrada dentro del Catálogo de Proveedores y Contratistas</p>';
  content += '        <p class="linea_blanca">Guía&nbsp;&nbsp;&nbsp;<a href="../documentos/uno.pdf" target="_blank" tabindex="0" aria-label="Vinculo al "><img src="img/ico_pdf.png" alt="Documento PDF"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(337 KB)</p>';
  content += '      </div>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';

  content += '<div class="row linea_blanca">';
  content += '  <div class="col-xs-12 col-sm-6 col-md-6">';
  content += '    <div class="col-xs-3">&nbsp;</div>';
  content += '    <div class="col-xs-9">';
  content += '      <p><a href="http://localhost:49739/proveedor/SiaTemporal" aria-label="Si ha sido invitado a participar en algún proceso de contratación, Vinculo" target="_blank" tabindex="0"><strong>¿Ha sido invitado a participar en algún proceso de contratación y desea recuperar su contraseña?</strong></a></p>';
  content += '      <p class="linea_blanca">Guía&nbsp;&nbsp;&nbsp;<a href="../documentos/uno.pdf" target="_blank" tabindex="0" aria-label="Vinculo al "><img src="img/ico_pdf.png" alt="Documento PDF"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(451 KB)</p>';
  content += '    </div>';
  content += '  </div>';
  content += '</div>';

  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="col-xs-12 justificado">';
  content += '  <hr>';
  content += '  <p><strong>Información Adicional:</strong></p>';
  content += '  <p>A las empresas que forman parte del Catálogo de Proveedores y Contratistas, en caso de no poder acceder al correo que se encuentra registrado para la recuperación de la contraseña y/o actualización de información, favor de enviar correo electrónico al personal del Instituto de la entidad federativa que le corresponde, cuyos datos de contacto podrá obtener en el listado que para tal efecto se proporciona, anexando la siguiente documentación.</p>';
  content += '  <ul style="margin-bottom:20px;"><li>Escrito de solicitud firmado por el Proveedor o Contratista o su Representante Legal,</li><li>Acta Constitutiva de la empresa y/o poder notarial del representante Legal</li></ul>';
  content += '  <p class="linea_blanca"><strong>Consulta los responsables del trámite en el Instituto por entidad federativa:</strong>&nbsp;&nbsp;<a href="../documentos/uno.pdf" target="_blank" tabindex="0" aria-label="Vinculo al "><img src="img/ico_pdf.png" alt="Documento PDF"></a>&nbsp;&nbsp;(1.20 MB)</p>';
  content += '</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';
  content += '<div class="col-xs-12 espacio">&nbsp;</div>';

  return content;
}
