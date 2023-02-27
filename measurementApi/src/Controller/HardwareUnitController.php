<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\HardwareUnit;
use App\Entity\HardwareUnitType;
use App\Entity\HardwarePlacement;

#[Route('/api', name: 'api_')]
class HardwareUnitController extends AbstractController
{
    #[Route('/hardwareUnit', name: 'hardwareUnit_index', methods: ['GET', 'HEAD'])]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $hardwareUnits = $doctrine->getRepository(HardwareUnit::class)->findAll();

        $data = [];

        foreach ($hardwareUnits as $hardwareUnit) {
            $data[] = [
                'id' => $hardwareUnit->getId(),
                'hardwareUnitTypeId' => $hardwareUnit->getHardwareUnitTypeId()->getName(),
                'hardwarePlacementId' => $hardwareUnit->getHardwarePlacementId()->getName(),
                'name' => $hardwareUnit->getName(),
                'createdDate' => $hardwareUnit->getCreatedDate(),
                'editedDate' => $hardwareUnit->getEditedDate(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/hardwareUnit', name: 'hardwareUnit_new', methods: ['POST'])]
    public function new(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        // Få fat i specifik relationel data "Hardware unit type"
        $hardwareUnitType = $entityManager->getRepository(HardwareUnitType::class)
            ->find(json_decode($request->getContent())->hardwareUnitTypeId);

        // Få fat i specifik relationel data "Hardware placement"
        $hardwarePlacement = $entityManager->getRepository(HardwarePlacement::class)
            ->find(json_decode($request->getContent())->hardwarePlacementId);

        $hardwareUnit = new HardwareUnit();
        $hardwareUnit->setHardwareUnitTypeId($hardwareUnitType);
        $hardwareUnit->setHardwarePlacementId($hardwarePlacement);
        $hardwareUnit->setName(json_decode($request->getContent())->name);
        $hardwareUnit->setCreatedDate(new \DateTime());
        $hardwareUnit->setEditedDate(new \DateTime());

        $entityManager->persist($hardwareUnit);
        $entityManager->flush();

        return $this->json('Oprettet ny hardware unit id: ' . $hardwareUnit->getId());
    }

    #[Route('/hardwareUnit/{id}', name: 'hardwareUnit_show', methods: ['GET'])]
    public function show(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $hardwareUnit = $doctrine->getRepository(HardwareUnit::class)->find($id);

        if ( ! $hardwareUnit) {
            return $this->json('Der blev ikke fundet nogen hardware unit med id: ' . $id, 404);
        }

        $data =  [
            'id' => $hardwareUnit->getId(),
            'hardwareUnitTypeId' => $hardwareUnit->getHardwareUnitTypeId()->getName(),
            'hardwarePlacementId' => $hardwareUnit->getHardwarePlacementId()->getName(),
            'name' => $hardwareUnit->getName(),
            'createdDate' => $hardwareUnit->getCreatedDate(),
            'editedDate' => $hardwareUnit->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/hardwareUnit/{id}', name: 'hardwareUnit_edit', methods: ['PUT'])]
    public function edit(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $hardwareUnit = $entityManager->getRepository(HardwareUnit::class)->find($id);

        if ( ! $hardwareUnit) {
            return $this->json('Der blev ikke fundet nogen hardware unit med id: ' . $id, 404);
        }

        // Få fat i specifik relationel data "Hardware unit type"
        $hardwareUnitTypeId = $entityManager->getRepository(HardwareUnitType::class)
            ->find(json_decode($request->getContent())->hardwareUnitTypeId);

        if ( ! $hardwareUnitTypeId) {
            return $this->json('Hardware unit type blev ikke fundet', 404);
        }

        // Få fat i specifik relationel data "Hardware placement"
        $hardwarePlacementId = $entityManager->getRepository(HardwarePlacement::class)
            ->find(json_decode($request->getContent())->hardwarePlacementId);

        if ( ! $hardwarePlacementId) {
            return $this->json('Hardware placement blev ikke fundet', 404);
        }

        $hardwareUnit->setHardwareUnitTypeId($hardwareUnitTypeId);
        $hardwareUnit->setHardwarePlacementId($hardwarePlacementId);
        $hardwareUnit->setName(json_decode($request->getContent())->name);
        $hardwareUnit->setEditedDate(new \DateTime());

        $entityManager->flush();

        $data =  [
            'id' => $hardwareUnit->getId(),
            'hardwareUnitTypeId' => $hardwareUnitTypeId->getName(),
            'hardwarePlacementId' => $hardwarePlacementId->getName(),
            'name' => $hardwareUnit->getName(),
            'createdDate' => $hardwareUnit->getCreatedDate(),
            'editedDate' => $hardwareUnit->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/hardwareUnit/{id}', name: 'hardwareUnit_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $hardwareUnit = $entityManager->getRepository(HardwareUnit::class)->find($id);

        if ( ! $hardwareUnit) {
            return $this->json('Der blev ikke fundet nogen hardware unit med id: ' . $id, 404);
        }

        $entityManager->remove($hardwareUnit);
        $entityManager->flush();

        return $this->json('Hardware unit med id: ' . $id . " er nu slettet");
    }
}