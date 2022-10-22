package ru.dragon.smark_book.entity;

import javax.persistence.*;

@Entity
@Table(name = "v1_modules", schema = "smart_book")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
