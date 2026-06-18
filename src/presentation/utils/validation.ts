export const validateRequired = (value: string, label= "Este campo" ) : string |null => {
  console.log(value.trim())
 return value.trim() ? null : `Informe ${label.toLowerCase()}`;
}