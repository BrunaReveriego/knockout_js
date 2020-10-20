
        function _contato(Nome, Sobrenome, Contato) {
            this.Nome = ko.observable(Nome);
            this.Sobrenome = ko.observable(Sobrenome);
            this.Nome = ko.computed(function () {
                return this.Nome() + ' ' + this.Sobrenome();
            }, this);
            this.Contato = ko.observable(Contato);

            this.isEditing = ko.observable(false);

            this.editarContato = function (event) {
                this.isEditing(true);
            }

            this.atualizarContato = function (task) {
                this.isEditing(false);
            }
        }

        var viewModel = function () {
            self = this;
            var listaContatos = [new _contato("Jose Carlos", "Macoratti", "99850-9652"),
                                new _contato("Janice", "Lima", "8850-0011"),
                                new _contato("Jefferson", "Bueno", "7850-9080")];
            self.Nome = ko.observable();
            self.Sobrenome = ko.observable();
            self.Contato = ko.observable();
            self.Contatos = ko.observableArray(listaContatos);

            // remove contato
            self.removerContato = function (_contato) { self.Contatos.remove(_contato) }

            //inclui contato
            self.adicionarContato = function () {
                var con = new _contato(self.Nome(), self.Sobrenome(), self.Contato())
                self.Contatos.push(con);
                self.Nome("");
                self.Sobrenome("");
                self.Contato("");
            };
        }

        ko.applyBindings(new viewModel());
    
