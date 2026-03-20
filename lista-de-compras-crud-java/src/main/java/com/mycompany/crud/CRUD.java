// Autor: Fernando Chaves Rodrigues | Matrícula: 202308423991
// Colaborador: Lucas Vieira | Matrícula: 202308244442
// Colaborador: Gustavo Ferreira | Matrícula: 202308424459
package com.mycompany.crud;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class CRUD {

    public static void main(String[] args) {
        // Definição da tela e do painel
        JFrame tela = new JFrame("CRUD com Java");
        JPanel painel = new JPanel();

        // configurações do painel
        painel.setLayout(new FlowLayout());
        painel.setLayout(null);

        // Título - H1
        JLabel h1 = new JLabel("Adicionar itens");
        h1.setFont(new Font("Arial", Font.PLAIN, 24));
        h1.setBounds(170, -30, 800, 100);
        painel.add(h1);

        // Formulário
        JLabel productNameLabel = new JLabel("Produto:");
        productNameLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        productNameLabel.setBounds(10, 50, 300, 20);
        painel.add(productNameLabel);

        JTextField NameTextField = new JTextField();
        NameTextField.setFont(new Font("Arial", Font.PLAIN, 14));
        NameTextField.setBounds(100, 50, 300, 20);
        painel.add(NameTextField);

        JLabel productPriceLabel = new JLabel("Preço:");
        productPriceLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        productPriceLabel.setBounds(10, 90, 300, 20);
        painel.add(productPriceLabel);

        JTextField PriceTextField = new JTextField();
        PriceTextField.setFont(new Font("Arial", Font.PLAIN, 14));
        PriceTextField.setBounds(100, 90, 300, 20);
        painel.add(PriceTextField);

        JLabel productQuantityLabel = new JLabel("Quantidade:");
        productQuantityLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        productQuantityLabel.setBounds(10, 130, 300, 20);
        painel.add(productQuantityLabel);

        JTextField QuantityTextField = new JTextField();
        QuantityTextField.setFont(new Font("Arial", Font.PLAIN, 14));
        QuantityTextField.setBounds(100, 130, 300, 20);
        painel.add(QuantityTextField);

        JLabel productIdLabel = new JLabel("ID:");
        productIdLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        productIdLabel.setBounds(10, 170, 300, 20);
        painel.add(productIdLabel);

        JTextField IdTextField = new JTextField();
        IdTextField.setFont(new Font("Arial", Font.PLAIN, 14));
        IdTextField.setBounds(100, 170, 300, 20);
        painel.add(IdTextField);

        JButton buttonAdd = new JButton("Adicionar");
        buttonAdd.setFont(new Font("Arial", Font.PLAIN, 14));
        buttonAdd.setBounds(0, 220, 100, 20);
        painel.add(buttonAdd);

        JButton buttonClear = new JButton("Limpar");
        buttonClear.setFont(new Font("Arial", Font.PLAIN, 14));
        buttonClear.setBounds(100, 220, 100, 20);
        painel.add(buttonClear);

        JButton buttonList = new JButton("Listar");
        buttonList.setFont(new Font("Arial", Font.PLAIN, 14));
        buttonList.setBounds(200, 220, 100, 20);
        painel.add(buttonList);

        JButton buttonAtt = new JButton("Atualizar");
        buttonAtt.setFont(new Font("Arial", Font.PLAIN, 14));
        buttonAtt.setBounds(300, 220, 100, 20);
        painel.add(buttonAtt);

        JButton buttonDel = new JButton("Deletar");
        buttonDel.setFont(new Font("Arial", Font.PLAIN, 14));
        buttonDel.setBounds(400, 220, 100, 20);
        painel.add(buttonDel);

        // Linha divisória
        JSeparator hr = new JSeparator(SwingConstants.HORIZONTAL);
        hr.setBounds(0, 250, 780, 2);
        painel.add(hr);

        // Título - H2
        JLabel h2 = new JLabel("Itens");
        h2.setFont(new Font("Arial", Font.PLAIN, 22));
        h2.setBounds(225, 220, 800, 100);
        painel.add(h2);

        // ArrayList
        // ArrayList<Produto> ProductList = new ArrayList<>();
        // Lista dos itens
        JTextArea ProductTextArea = new JTextArea();
        ProductTextArea.setFont(new Font("Arial", Font.PLAIN, 15));
        ProductTextArea.setEditable(false);
        ProductTextArea.setBounds(10, 300, 465, 200);
        painel.add(ProductTextArea);

        // Funções
        buttonClear.addActionListener((ActionEvent e) -> {
            NameTextField.setText("");
            PriceTextField.setText("");
            QuantityTextField.setText("");
            IdTextField.setText("");
            ProductTextArea.setText("");
        });

        // Fernando
        buttonAdd.addActionListener((ActionEvent e) -> {
            try {
                String name = NameTextField.getText().trim();
                double price = Double.parseDouble(PriceTextField.getText().trim());
                int quantity = Integer.parseInt(QuantityTextField.getText().trim());

                if (name.isEmpty()) {
                    throw new IllegalArgumentException("Nome não pode ser vazio!");
                }

                if (!name.matches("[a-zA-ZÀ-ÿ]+")) {
                    throw new IllegalArgumentException("O nome deve conter apenas letras.");
                }

                if (price < 0) {
                    throw new IllegalArgumentException("O preço não pode ser negativo!");
                }

                if (quantity < 0) {
                    throw new IllegalArgumentException("A quantidade não pode ser negativa!");
                }

                Produto product = new Produto(name, price, quantity);
                //ProductList.add(product);

                if (Produto.CREATE(product)) {
                    JOptionPane.showMessageDialog(null, "Produto adicionado com sucesso!");
                } else {
                    JOptionPane.showMessageDialog(painel, "Erro ao adicionar produto", "Erro",
                            JOptionPane.ERROR_MESSAGE);
                }

            } catch (NumberFormatException Error) {
                JOptionPane.showMessageDialog(null, "Erro: preço e quantidade devem ser números inteiros.");
            } catch (IllegalArgumentException Error) {
                JOptionPane.showMessageDialog(null, "Erro: " + Error.getMessage());
            }
        });

        // Lucas
        buttonAtt.addActionListener((ActionEvent e) -> {
            String nome = NameTextField.getText().trim();
            String precoStr = PriceTextField.getText().trim();
            String qtdStr = QuantityTextField.getText().trim();
            String idStr = IdTextField.getText().trim();
            if (nome.isEmpty()) {
                JOptionPane.showMessageDialog(painel, "O nome não pode ser vazio", "ERRO",
                        JOptionPane.ERROR_MESSAGE);
                return;
            }

            if (idStr.isEmpty()) {
                JOptionPane.showMessageDialog(painel, "Id não pode ser nulo", "Erro",
                        JOptionPane.ERROR_MESSAGE);
                return;
            }

            try {
                double preco = Double.parseDouble(precoStr);
                int quantidade = Integer.parseInt(qtdStr);
                int id = Integer.parseInt(idStr);

                if (preco <= 0 || quantidade <= 0) {
                    JOptionPane.showMessageDialog(painel, "Preço e quantidade devem ser positivos", "Erro",
                            JOptionPane.ERROR_MESSAGE);
                    return;
                }

                if (id <= 0) {
                    JOptionPane.showMessageDialog(painel, "Id deve ser maior que zero", "Erro",
                            JOptionPane.ERROR_MESSAGE);
                    return;
                }
                //String produto = "Nome: " + nome + " preço: R$" + String.format("%.2f", preco) + " Quantidade: " + quantidade;
                //listaProdutos.add(produto);

                if (Produto.UPDATE(id, nome, preco, quantidade)) {
                    JOptionPane.showMessageDialog(painel, "Produto Atualizado!!");
                } else {
                    JOptionPane.showMessageDialog(painel, "Produto Não Existe", "Erro",
                            JOptionPane.ERROR_MESSAGE);
                }
            } catch (NumberFormatException ex) {
                JOptionPane.showMessageDialog(painel, "Preço e quantidade devem ser inteiros", "ERRO",
                        JOptionPane.ERROR_MESSAGE);
            }
        });

        // Gustavo
        buttonDel.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String idStr = IdTextField.getText().trim();

                if (idStr.isEmpty()) {
                    JOptionPane.showMessageDialog(painel, "Id não pode ser nulo", "Erro",
                            JOptionPane.ERROR_MESSAGE);
                    return;
                }

                int id = Integer.parseInt(idStr);

                if (id <= 0) {
                    JOptionPane.showMessageDialog(painel, "Id deve ser maior que 0", "Erro",
                            JOptionPane.ERROR_MESSAGE);
                    return;
                }

                if (idStr.isEmpty()) {
                    throw new IllegalArgumentException("Nome não pode ser vazio!");
                }

                try {
                    if (Produto.DELETE(id)) {
                        JOptionPane.showMessageDialog(painel, "Produto Excluido!!");
                    } else {
                        JOptionPane.showMessageDialog(painel, "Produto Não Existe", "Erro",
                                JOptionPane.ERROR_MESSAGE);
                    }
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(painel, "Preço e quantidade devem ser inteiros", "ERRO",
                            JOptionPane.ERROR_MESSAGE);
                }
            }
        });

        // Fernando
        buttonList.addActionListener((ActionEvent e) -> {
            try {
                if (Produto.READ() != null) {
                    ProductTextArea.setText(Produto.READ());
                } else {
                    ProductTextArea.setText("Não foi possível listar os produtos");
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(painel, "Ocorreu um erro ao listar os produtos", "ERRO",
                        JOptionPane.ERROR_MESSAGE);
            }
        });

        // Configurações da tela
        tela.add(painel);
        tela.setSize(500, 600);
        tela.setVisible(true);
        tela.setResizable(false);
        tela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
