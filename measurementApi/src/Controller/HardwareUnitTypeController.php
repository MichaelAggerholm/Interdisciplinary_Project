<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\HardwareUnitType;

#[Route('/api', name: 'api_')]
class HardwareUnitTypeController extends AbstractController
{
    #[Route('/hardwareUnitType', name: 'hardwareUnitType_index', methods: ['GET', 'HEAD'])]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $hardwareUnitTypes = $doctrine->getRepository(HardwareUnitType::class)->findAll();

        $data = [];

        foreach ($hardwareUnitTypes as $hardwareUnitType) {
            $data[] = [
                'id' => $hardwareUnitType->getId(),
                'name' => $hardwareUnitType->getName(),
                'createdDate' => $hardwareUnitType->getCreatedDate(),
                'editedDate' => $hardwareUnitType->getEditedDate(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/hardwareUnitType', name: 'hardwareUnitType_new', methods: ['POST'])]
    public function new(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        $hardwareUnitType = new HardwareUnitType();
        $hardwareUnitType->setName($request->request->get('name'));
        $hardwareUnitType->setCreatedDate(new \DateTime());
        $hardwareUnitType->setEditedDate(new \DateTime());

        $entityManager->persist($hardwareUnitType);
        $entityManager->flush();

        return $this->json('Oprettet ny hardware unit type med id: ' . $hardwareUnitType->getId());
    }

    #[Route('/hardwareUnitType/{id}', name: 'hardwareUnitType_show', methods: ['GET'])]
    public function show(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $hardwareUnitType = $doctrine->getRepository(HardwareUnitType::class)->find($id);

        if ( ! $hardwareUnitType) {
            return $this->json('Der blev ikke fundet nogen hardware unit type med id: ' . $id, 404);
        }

        $data =  [
            'id' => $hardwareUnitType->getId(),
            'name' => $hardwareUnitType->getName(),
            'createdDate' => $hardwareUnitType->getCreatedDate(),
            'editedDate' => $hardwareUnitType->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/hardwareUnitType/{id}', name: 'hardwareUnitType_edit', methods: ['PUT'])]
    public function edit(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $hardwareUnitType = $entityManager->getRepository(HardwareUnitType::class)->find($id);

        if ( ! $hardwareUnitType) {
            return $this->json('Der blev ikke fundet nogen hardware unit type med id: ' . $id, 404);
        }

        $hardwareUnitType->setName($request->request->get('name'));
        $hardwareUnitType->setEditedDate(new \DateTime());
        $entityManager->flush();

        $data =  [
            'id' => $hardwareUnitType->getId(),
            'name' => $hardwareUnitType->getName(),
            'createdDate' => $hardwareUnitType->getCreatedDate(),
            'editedDate' => $hardwareUnitType->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/hardwareUnitType/{id}', name: 'hardwareUnitType_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $hardwareUnitType = $entityManager->getRepository(HardwareUnitType::class)->find($id);

        if ( ! $hardwareUnitType) {
            return $this->json('Der blev ikke fundet nogen hardware unit type med id: ' . $id, 404);
        }

        $entityManager->remove($hardwareUnitType);
        $entityManager->flush();

        return $this->json('Hardware unit type med id: ' . $id . " er nu slettet");
    }
}
