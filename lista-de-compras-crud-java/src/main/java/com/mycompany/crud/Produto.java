// Autor: Fernando Chaves Rodrigues | Matrícula: 202308423991
// Colaborador: Lucas Vieira | Matrícula: 202308244442
// Colaborador: Gustavo Ferreira | Matrícula: 202308424459
package com.mycompany.crud;

import java.sql.*;

public class Produto {

    private final String name;
    private final double price;
    private final int quantity;

    public Produto(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    // CREATE (Fernando)
    public static boolean CREATE(Produto product) {
        String URL = "jdbc:postgresql://localhost:5432/postgres";
        String USER = "postgres";
        String PASSWORD = "DB145820";
        Connection conn = null;

        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            if (conn != null) {
                String SQL = "INSERT INTO produtos (nome, preco, quantidade) VALUES (?,?,?)";
                PreparedStatement estado = conn.prepareStatement(SQL);
                estado.setString(1, product.getName());
                estado.setDouble(2, product.getPrice());
                estado.setInt(3, product.getQuantity());
                int linhasInseridas = estado.executeUpdate();
                if (linhasInseridas != 0) {
                    System.out.println("Linhas Inseridas " + linhasInseridas);
                    return true;
                } else {
                    System.out.println("Linhas Inseridas" + linhasInseridas);
                    return false;
                }
            } else {
                System.out.println("Erro ao adicionar produto");
                return false;
            }
        } catch (SQLException error) {
            System.out.println("Erro ao criar conexão");
            return false;
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException error) {
                System.out.println("Falha ao tentar fechar a conexao com o banco de dados");
            }
        }
    }

    // READ (Fernando)
    public static String READ() {
        String URL = "jdbc:postgresql://localhost:5432/postgres";
        String USER = "postgres";
        String PASSWORD = "DB145820";
        Connection conn = null;

        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            if (conn != null) {
                String texto = "";
                String SQL = "SELECT id, nome, preco, quantidade FROM produtos;";
                try {
                    Statement estado = conn.createStatement();
                    ResultSet result = estado.executeQuery(SQL);
                    while (result.next()) {
                        int id = result.getInt("id");
                        String nome = result.getString("nome");
                        double preco = result.getDouble("preco");
                        int quantidade = result.getInt("quantidade");
                        System.out.println("Id: " + id + " | Nome: " + nome + " | Preço: " + preco + " | Quantidade: " + quantidade);
                        texto += "Id: " + id + " | Nome: " + nome + " | Preço: " + preco + " | Quantidade: " + quantidade + "\n";
                    }
                    return texto;
                } catch (SQLException e) {
                    System.out.println("Erro ao realizar consulta");
                }
            } else {
                System.out.println("Falha ao conectar ao banco de dados.");
            }
        } catch (SQLException error) {
            System.out.println("Erro ao criar conexão");
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException error) {
                System.out.println("Falha ao fechar a conexao");
            }
        }
        return null;
    }

    // UPDATE (Lucas)
    public static boolean UPDATE(int id, String nome, double preco, int quantidade) {
        String URL = "jdbc:postgresql://localhost:5432/postgres";
        String USER = "postgres";
        String PASSWORD = "DB145820";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            if (conn != null) {
                String SQLVerificador = "SELECT nome FROM produtos WHERE id = ?;";
                PreparedStatement estadoVerificado = conn.prepareStatement(SQLVerificador);
                estadoVerificado.setInt(1, id);
                ResultSet result = estadoVerificado.executeQuery();
                if (result.next()) {

                    String SQL = "UPDATE produtos SET nome = ?, preco = ?, quantidade = ? WHERE id = ? ";
                    PreparedStatement estado = conn.prepareStatement(SQL);

                    estado.setString(1, nome);
                    estado.setDouble(2, preco);
                    estado.setInt(3, quantidade);
                    estado.setInt(4, id);
                    int linhasAtualizadas = estado.executeUpdate();
                    if (linhasAtualizadas != 0) {
                        System.out.println("Linhas Atualizadas " + linhasAtualizadas);
                        return true;
                    } else {
                        System.out.println("Linhas Atualizadas " + linhasAtualizadas);
                        return false;
                    }
                } else {
                    System.out.println("Id não existe");
                }
            } else {
                System.out.println("Falha ao conectar");
                return false;
            }
        } catch (SQLException Error) {
            System.out.println("Error ao atualizar");
            return false;
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException Error) {
                System.out.println("Conexão não foi fechada");
            }
        }
        return false;
    }

    // DELETE (Gustavo)
    public static boolean DELETE(int id) {
        String URL = "jdbc:postgresql://localhost:5432/postgres";
        String USER = "postgres";
        String PASSWORD = "DB145820";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            if (conn != null) {
                String SQLVerificador = "SELECT nome FROM produtos WHERE id = ?;";
                PreparedStatement estadoVerificado = conn.prepareStatement(SQLVerificador);
                estadoVerificado.setInt(1, id);
                ResultSet result = estadoVerificado.executeQuery();
                if (result.next()) {
                    String SQL = "DELETE FROM produtos WHERE id = ?";
                    PreparedStatement estado = conn.prepareStatement(SQL);
                    estado.setInt(1, id);
                    int linhasDeletadas = estado.executeUpdate();
                    if (linhasDeletadas != 0) {
                        System.out.println("Linhas Deletadas " + linhasDeletadas);
                        return true;
                    } else {
                        System.out.println("Linhas Deletadas " + linhasDeletadas);
                        return false;
                    }
                } else {
                    System.out.println("Id não existe");
                }
            } else {
                System.out.println("Falha ao criar conexao !!");
                return false;
            }
        } catch (SQLException Error) {
            System.out.println("Falha ao criar conexao !!");
            return false;
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException Error) {
                System.out.println("Conexão não foi fechada");
            }
        }
        return false;
    }
}
