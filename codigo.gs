function doGet(e) {
  var page = e.parameter.page;
  return servePage(page);
}

function servePage(page) {
  var template;
  
  switch(page) {
    case 'amazon':
      template = HtmlService.createTemplateFromFile('Amazon');
      break;
    case 'ebay':
      template = HtmlService.createTemplateFromFile('eBay');
      break;
    case 'procesos':
      template = HtmlService.createTemplateFromFile('Procesos');
      break;
    case 'prepcenters':
      template = HtmlService.createTemplateFromFile('PrepCenters');
      break;
    case 'contacto':
      template = HtmlService.createTemplateFromFile('Contacto');
      break;
    case 'nosotros':
      template = HtmlService.createTemplateFromFile('Nosotros');
      break;
    default:
      // Página por defecto (Home)
      template = HtmlService.createTemplateFromFile('Index');
  }
  
  return template.evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
