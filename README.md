# knockout_js
.NET - Apresentando o Knockout (KO) - http://www.macoratti.net/13/04/js_ko1.htm


O código acima usa os seguintes recursos do KO:

**observable:** Usada para definir as propriedades do modelo. Quando estas propriedades são vinculadas com Interface (IU) e quando o valor para essas propriedades são atualizadas, automaticamente os elementos da interface vinculados com estas propriedades serão atualizados com o novo valor;
O Knockout adiciona rastreamento de dependências por meio de observables, que são objetos que podem notificar os ouvintes quando valores subjacentes foram alterados (semelhante ao conceito da interface INotifyPropertyChanged na tecnologia XAML). O KO implementa as propriedades observable dispondo propriedades de objetos com uma função personalizada chamada observable.

**ObservableArray:** Representa um conjunto de elementos de dados que requerem notificações. Tipicamente é usado para vincular com o tipo de Tabela de elementos;
**ApplyBindings:** Usado para ativar o KO para o documento HTML atual ou um elemento de interface do usuário específico no documento HTML. O parâmetro deste método é o view-model, que é definido no JavaScript. Este ViewModel contém o observable, observableArray e vários métodos;
O exemplo também utiliza os seguintes tipos de vinculação:

**click :** Representa um manipulador de eventos Click adicionado ao elemento da interface do usuário, de modo que a função JavaScript seja chamada;
**value:** Representa a vinculação com a propriedade do elemento da interface do usuário do valor para a propriedade definida para o ViewModel;
**visible:** Usada para ocultar ou exibir o elemento de interface do usuário com base no valor passado para sua vinculação;
**Text :** Representa o valor de texto do parâmetro passado para o elemento de interface do usuário;
