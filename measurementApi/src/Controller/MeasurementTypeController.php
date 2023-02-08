<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\MeasurementType;

#[Route('/api', name: 'api_')]
class MeasurementTypeController extends AbstractController
{
    #[Route('/measurementType', name: 'measurementType_index', methods: ['GET', 'HEAD'])]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $measurementTypes = $doctrine->getRepository(MeasurementType::class)->findAll();

        $data = [];

        foreach ($measurementTypes as $measurementType) {
            $data[] = [
                'id' => $measurementType->getId(),
                'name' => $measurementType->getName(),
                'createdDate' => $measurementType->getCreatedDate(),
                'editedDate' => $measurementType->getEditedDate(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/measurementType', name: 'measurementType_new', methods: ['POST'])]
    public function new(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        $measurementType = new MeasurementType();
        $measurementType->setName($request->request->get('name'));
        $measurementType->setCreatedDate(new \DateTime());
        $measurementType->setEditedDate(new \DateTime());

        $entityManager->persist($measurementType);
        $entityManager->flush();

        return $this->json('Oprettet ny measurement type med id: ' . $measurementType->getId());
    }

    #[Route('/measurementType/{id}', name: 'measurementType_show', methods: ['GET'])]
    public function show(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $measurementType = $doctrine->getRepository(MeasurementType::class)->find($id);

        if ( ! $measurementType) {
            return $this->json('Der blev ikke fundet nogen measurement type med id: ' . $id, 404);
        }

        $data =  [
            'id' => $measurementType->getId(),
            'name' => $measurementType->getName(),
            'createdDate' => $measurementType->getCreatedDate(),
            'editedDate' => $measurementType->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/measurementType/{id}', name: 'measurementType_edit', methods: ['PUT'])]
    public function edit(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $measurementType = $entityManager->getRepository(MeasurementType::class)->find($id);

        if ( ! $measurementType) {
            return $this->json('Der blev ikke fundet nogen measurement type med id: ' . $id, 404);
        }

        $measurementType->setName($request->request->get('name'));
        $measurementType->setEditedDate(new \DateTime());
        $entityManager->flush();

        $data =  [
            'id' => $measurementType->getId(),
            'name' => $measurementType->getName(),
            'createdDate' => $measurementType->getCreatedDate(),
            'editedDate' => $measurementType->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/measurementType/{id}', name: 'measurementType_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $measurementType = $entityManager->getRepository(MeasurementType::class)->find($id);

        if ( ! $measurementType) {
            return $this->json('Der blev ikke fundet nogen measurement type med id: ' . $id, 404);
        }

        $entityManager->remove($measurementType);
        $entityManager->flush();

        return $this->json('Measurement type med id: ' . $id . " er nu slettet");
    }
}