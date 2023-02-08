<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\HardwarePlacement;

#[Route('/api', name: 'api_')]
class HardwarePlacementController extends AbstractController
{
    #[Route('/hardwarePlacement', name: 'hardwarePlacement_index', methods: ['GET', 'HEAD'])]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $hardwarePlacements = $doctrine->getRepository(HardwarePlacement::class)->findAll();

        if ( ! $hardwarePlacements) {
            return $this->json('Der blev ikke fundet nogen hardware placements', 404);
        }

        $data = [];

        foreach ($hardwarePlacements as $hardwarePlacement) {
            $data[] = [
                'id' => $hardwarePlacement->getId(),
                'name' => $hardwarePlacement->getName(),
                'createdDate' => $hardwarePlacement->getCreatedDate(),
                'editedDate' => $hardwarePlacement->getEditedDate(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/hardwarePlacement', name: 'hardwarePlacement_new', methods: ['POST'])]
    public function new(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        $hardwarePlacement = new HardwarePlacement();
        $hardwarePlacement->setName($request->request->get('name'));
        $hardwarePlacement->setCreatedDate(new \DateTime());
        $hardwarePlacement->setEditedDate(new \DateTime());

        $entityManager->persist($hardwarePlacement);
        $entityManager->flush();

        return $this->json('Oprettet ny hardware placement med id: ' . $hardwarePlacement->getId());
    }

    #[Route('/hardwarePlacement/{id}', name: 'hardwarePlacement_show', methods: ['GET'])]
    public function show(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $hardwarePlacement = $doctrine->getRepository(HardwarePlacement::class)->find($id);

        if ( ! $hardwarePlacement) {
            return $this->json('Der blev ikke fundet nogen hardware placement med id: ' . $id, 404);
        }

        $data =  [
            'id' => $hardwarePlacement->getId(),
            'name' => $hardwarePlacement->getName(),
            'createdDate' => $hardwarePlacement->getCreatedDate(),
            'editedDate' => $hardwarePlacement->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/hardwarePlacement/{id}', name: 'hardwarePlacement_edit', methods: ['PUT'])]
    public function edit(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $hardwarePlacement = $entityManager->getRepository(HardwarePlacement::class)->find($id);

        if ( ! $hardwarePlacement) {
            return $this->json('Der blev ikke fundet nogen hardware placements med id: ' . $id, 404);
        }

        $hardwarePlacement->setName($request->request->get('name'));
        $hardwarePlacement->setEditedDate(new \DateTime());
        $entityManager->flush();

        $data =  [
            'id' => $hardwarePlacement->getId(),
            'name' => $hardwarePlacement->getName(),
            'createdDate' => $hardwarePlacement->getCreatedDate(),
            'editedDate' => $hardwarePlacement->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/hardwarePlacement/{id}', name: 'hardwarePlacement_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $hardwarePlacement = $entityManager->getRepository(HardwarePlacement::class)->find($id);

        if ( ! $hardwarePlacement) {
            return $this->json('Der blev ikke fundet nogen hardware placements med id: ' . $id, 404);
        }

        $entityManager->remove($hardwarePlacement);
        $entityManager->flush();

        return $this->json('Hardware placement med id: ' . $id . " er nu slettet");
    }
}
