let mes =parseInt(prompt("Ingrese el mes: "))

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    document.writeln(31);
    break;
  case 4:
    case 6:
        case 9:
            case 11: document.writeln(30)
    
    break;
    case 2:document.writeln(28)
    break
    default: document.writeln("no se encuentra")
    break
}
