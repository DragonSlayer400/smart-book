package ru.dragon.smark_book.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.dragon.smark_book.entity.Module;

public interface ModuleRepo extends JpaRepository<Module, Long> {
}
