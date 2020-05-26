class ApiWorker {

    constructor(link, type='') {
      this.link = link;
      this.type = type.toUpperCase();
    }

    async simpleExecute(){
        try {
            
            const response = await fetch(this.link)
            const data = await response.json()
            return data

        } catch (err) {
            return err
        }
    }

    async execute(body){
        try {

            async function executeWithBody(met){

                const requestOptions = {
                    method: met,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                  };
                
                const response = await fetch(this.link, requestOptions);
                const data = await response.json()
                return data
            }

            switch (this.type) {
                case 'POST':
                    executeWithBody(this.type);
                    break;
                case 'PUT':
                    executeWithBody(this.type);
                    break;
                case 'PATCH':
                    executeWithBody(this.type);
                    break;
                default:
                    throw 'method type error';
              }
            

        } catch (err) {
            return err
        }
    }

  }

module.exports = ApiWorker