<?php

namespace App\Controller;

use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\HardwareUnit;
use App\Entity\MeasurementType;
use App\Entity\Measurement;

#[Route('/api', name: 'api_')]
class MeasurementController extends AbstractController
{
    #[Route('/measurement', name: 'measurement_index', methods: ['GET', 'HEAD'])]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        $measurements = $doctrine->getRepository(Measurement::class)->findAll();

        $data = [];

        foreach ($measurements as $measurement) {
            $data[] = [
                'id' => $measurement->getId(),
                'hardwareUnit' => $measurement->getHardwareUnitId()->getName(),
                'measurementType' => $measurement->getMeasurementTypeId()->getName(),
                'value' => $measurement->getValue(),
                'createdDate' => $measurement->getCreatedDate(),
                'editedDate' => $measurement->getEditedDate(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/measurement', name: 'measurement_new', methods: ['POST'])]
    public function new(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        // Få fat i specifik relationel data "Hardware unit"
        $hardwareUnit = $entityManager->getRepository(HardwareUnit::class)
            ->find((int)$request->request->get('hardwareUnitId'));

        // Få fat i specifik relationel data "Measurement type"
        $measurementType = $entityManager->getRepository(MeasurementType::class)
            ->find((int)$request->request->get('measurementTypeId'));

        $measurement = new Measurement();
        $measurement->setHardwareUnitId($hardwareUnit);
        $measurement->setMeasurementTypeId($measurementType);
        $measurement->setValue((float)$request->query->get('value'));
        $measurement->setCreatedDate(new DateTime());
        $measurement->setEditedDate(new DateTime());

        $entityManager->persist($measurement);
        $entityManager->flush();

        return $this->json('Oprettet ny measurement med id: ' . $measurement->getId());
    }

    #[Route('/measurement/{id}', name: 'measurement_show', methods: ['GET'])]
    public function show(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $measurement = $doctrine->getRepository(Measurement::class)->find($id);

        if (!$measurement) {
            return $this->json('Der blev ikke fundet nogen measurement med id: ' . $id, 404);
        }

        $data = [
            'id' => $measurement->getId(),
            'hardwareUnitId' => $measurement->getHardwareunitId()->getName(),
            'measurementTypeId' => $measurement->getMeasurementTypeId()->getName(),
            'value' => $measurement->getValue(),
            'createdDate' => $measurement->getCreatedDate(),
            'editedDate' => $measurement->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/measurement/{id}', name: 'measurement_edit', methods: ['PUT'])]
    public function edit(ManagerRegistry $doctrine, Request $request, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $measurement = $entityManager->getRepository(Measurement::class)->find($id);

        if ( ! $measurement) {
            return $this->json('Der blev ikke fundet nogen measurement med id: ' . $id, 404);
        }

        // Få fat i specifik relationel data "Hardware unit"
        $hardwareUnit = $entityManager->getRepository(HardwareUnit::class)
            ->find((int)$request->request->get('hardwareUnitId'));

        if ( ! $hardwareUnit) {
            return $this->json('Hardware unit blev ikke fundet', 404);
        }

        // Få fat i specifik relationel data "Measurement type"
        $measurementType = $entityManager->getRepository(MeasurementType::class)
            ->find((int)$request->request->get('measurementTypeId'));

        if ( ! $measurementType) {
            return $this->json('Measurement type blev ikke fundet', 404);
        }

        $measurement->setHardwareUnitId($hardwareUnit);
        $measurement->setMeasurementTypeId($measurementType);
        $measurement->setValue($request->request->get('value'));
        $measurement->setEditedDate(new DateTime());

        $entityManager->flush();

        $data = [
            'id' => $measurement->getId(),
            'hardwareUnitId' => $hardwareUnit->getName(),
            'measurementTypeId' => $measurementType->getName(),
            'value' => $measurement->getValue(),
            'createdDate' => $measurement->getCreatedDate(),
            'editedDate' => $measurement->getEditedDate(),
        ];

        return $this->json($data);
    }

    #[Route('/measurement/{id}', name: 'measurement_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $measurement = $entityManager->getRepository(Measurement::class)->find($id);

        if ( ! $measurement) {
            return $this->json('Der blev ikke fundet nogen measurement med id: ' . $id, 404);
        }

        $entityManager->remove($measurement);
        $entityManager->flush();

        return $this->json('Measurement med id: ' . $id . " er nu slettet");
    }
}
