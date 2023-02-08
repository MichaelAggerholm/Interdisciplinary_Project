<?php

namespace App\Entity;

use App\Repository\MeasurementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MeasurementRepository::class)]
class Measurement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'measurements')]
    #[ORM\JoinColumn(nullable: false)]
    private ?MeasurementType $measurementTypeId = null;

    #[ORM\ManyToOne(inversedBy: 'measurements')]
    #[ORM\JoinColumn(nullable: false)]
    private ?HardwareUnit $hardwareUnitId = null;

    #[ORM\Column]
    private ?float $value = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdDate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $editedDate = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMeasurementTypeId(): ?MeasurementType
    {
        return $this->measurementTypeId;
    }

    public function setMeasurementTypeId(?MeasurementType $measurementTypeId): self
    {
        $this->measurementTypeId = $measurementTypeId;

        return $this;
    }

    public function getHardwareUnitId(): ?HardwareUnit
    {
        return $this->hardwareUnitId;
    }

    public function setHardwareUnitId(?HardwareUnit $hardwareUnitId): self
    {
        $this->hardwareUnitId = $hardwareUnitId;

        return $this;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(float $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->createdDate;
    }

    public function setCreatedDate(\DateTimeInterface $createdDate): self
    {
        $this->createdDate = $createdDate;

        return $this;
    }

    public function getEditedDate(): ?\DateTimeInterface
    {
        return $this->editedDate;
    }

    public function setEditedDate(\DateTimeInterface $editedDate): self
    {
        $this->editedDate = $editedDate;

        return $this;
    }
}
