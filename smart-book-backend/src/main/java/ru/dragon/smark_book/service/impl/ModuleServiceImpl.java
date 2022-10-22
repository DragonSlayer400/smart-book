package ru.dragon.smark_book.service.impl;

import org.springframework.stereotype.Service;
import ru.dragon.smark_book.repo.ModuleRepo;
import ru.dragon.smark_book.service.ModuleService;

@Service
public class ModuleServiceImpl implements ModuleService {

    private final ModuleRepo moduleRepo;

    public ModuleServiceImpl(ModuleRepo moduleRepo) {
        this.moduleRepo = moduleRepo;
    }
}
