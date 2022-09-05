@FunctionalInterface
interface Fucntion {
    int soma(int x, int y);
}

public class Main{

    public static void main(String[] args){
        
        int soma0 = somaFunction(20,4, (z,a) -> {
            return z+a;
        });

        int soma1 = somaFunction(22,10, new Fucntion() {
            @Override
            public int soma(int x, int y) {
                return x+y;
            }
        });

        System.out.println(soma1 +" "+soma0);
    }
    //#region Funções puras
    // Função pura
    public static int soma(int x,int y){
        return x+y;
    }

    // Função pura com efeito colateral == side effect
    public static int multiple(int x,int y){
        // ele passa o armazenamento da variavel para outro gerenciar assim pode acontecer algo com o valor que esta fora do controle do usuário
        int result = x*y;
        return result;
    }

    // Função pura com primeira ordem
    public static int somaFunction(int x,int y, Fucntion fnc){
        return fnc.soma(x,y);
    }
    //#endregion

}